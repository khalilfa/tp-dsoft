# tp-dsoft
[![Build Status](https://travis-ci.org/khalilfa/tp-dsoft.svg?branch=master)](https://travis-ci.org/khalilfa/tp-dsoft)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7690ba6968814fba9f0b125dbe50dc53)](https://www.codacy.com/manual/khalilfa/tp-dsoft?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=khalilfa/tp-dsoft&amp;utm_campaign=Badge_Grade)

## Branching Strategy

Para resolver cada _issue_ se crea un branch con el número y una referencia al nombre: `issue-NN-descripcion-breve`.

> Por ejemplo, dado el issue "_#42 El sentido de la vida, el universo y todo lo demás_"
> se crea un branch `issue-42-respuesta-a-todo`.

Al resolver el issue se crea un _Pull Request_ hacia `master`. El _reviewer_ debería
hacer un _rebase_ en `master` (idealmente), pedir o no cambios, y luego proceder con
el _merge_.

Si se logró hacer el _merge_ correctamente el _branch_ debiese ser eliminado.

## Start backend project

Dentro del la carpeta /back ejectutar el siguiente comando: 
> mvn spring-boot:run
