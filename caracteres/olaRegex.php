<?php

$texto = 'Casa bonita é a casa amarela da esquina com a Rua ACASALAR.';

$padrao = '/(casa)/';

preg_match_all($padrao,$texto, $matches, PREG_OFFSET_CAPTURE);

var_dump($matches);

