<?php

namespace App\Alura;

class Contato
{
    private $email;
    private $endereco;
    private $cep;
    private $telefone;

    public function __construct(string $email, string $endereco, string $cep, string $telefone) {

        if ($this->validaEmail($email) !== false) {

            $this->email = $email;
        }else{
            $this->email = "Email inválido";
        }
        $this->endereco = $endereco;
        $this->cep = $cep;  
       
        if($this->validaTelefone($telefone)){
            $this->telefone = $telefone;
        }else{
            $this->telefone = "Telefone inválido";  
        }

    }

    public function getNomeUsuario(): string
    {

        $posicaoArroba = strpos($this->email,"@");

        if( $posicaoArroba === false ){
            return "Usuário inválido";
        }

        $nomeUsuario = substr($this->email,0,$posicaoArroba);
        return $nomeUsuario;
    }

    public function getEmail(): string 
    {
        return $this->email;
    }

    private function validaEmail(string $email)
    {
        return filter_var($email,FILTER_VALIDATE_EMAIL);
    }

    public function getEndereco():string
    {
        $enderecoCep = [$this->endereco, $this->cep];
        return implode(" - ", $enderecoCep);
    }

    public function getTelefone(): string
    {
        return $this->telefone;
    }

    private function validaTelefone(string $telefone):int 
    {       
        // 98745-5412
        // 7854-5621
        return preg_match('/^(\(\d{2}\)\s?)\d{4,5}-\d{4}/',$telefone);

    }
}   