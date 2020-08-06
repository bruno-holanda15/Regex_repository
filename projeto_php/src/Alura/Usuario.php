<?php

namespace App\Alura;

class Usuario
{

    private $nome;   
    private $sobrenome;
    private $senha;
    private $tratamemto;

    public function __construct(string $nome, string $senha,string $genero)
    {
        $nomeArray = explode(" ",$nome,2);

        if($nomeArray[0] === "" ){
            $this->nome = "Nome inválido";

        }else {
            $this->nome = $nomeArray[0];
        }


        if($nomeArray[1] === null ){

            $this->sobrenome = "Sobrenome inválido";

        }else {
            $this->sobrenome = $nomeArray[1];
        }

        $this->validaSenha($senha);
        $this->adicionaTratamentoSobrenome($nome,$genero);

    }

    public function getNome(): string
    {
        return $this->nome;
    }

    public function getSobrenome(): string
    {
        return $this->sobrenome;
    }

    public function setSenha($senha)
    {
        $this->senha = $senha;
    }

    public function getSenha():string
    {
        return $this->senha;
    }

    public function validaSenha($senha): void
    {
        $tamanhoSenha = strlen(trim($senha));

        if( $tamanhoSenha >= 6){
            $this->setSenha($senha);
        }else{
            $this->setSenha("Senha inválida.");
        }
    }

    private function adicionaTratamentoSobrenome(string $nome, string $genero)
    {
        if($genero === 'M') {
            $this->tratamemto = preg_replace('/^(\w+)\b/','Sr.',$nome , 1);   
        }

        if($genero === 'F') {
            $this->tratamemto = preg_replace('/^(\w+)\b/','Sra.',$nome , 1);    
        }
    }

    public function getTratamento(): string
    {
        return $this->tratamemto;   
    }

}