# tp-dsoft
[![Build Status](https://travis-ci.org/khalilfa/tp-dsoft.svg?branch=master)](https://travis-ci.org/khalilfa/tp-dsoft)
[![Coverage Status](https://coveralls.io/repos/github/khalilfa/tp-dsoft/badge.svg?branch=master)](https://coveralls.io/github/khalilfa/tp-dsoft?branch=master)

## Branching Strategy

Para resolver cada _issue_ se crea un branch con el número y una referencia al nombre: `issue-NN-descripcion-breve`.

> Por ejemplo, dado el issue "_#42 El sentido de la vida, el universo y todo lo demás_"
> se crea un branch `issue-42-respuesta-a-todo`.

Al resolver el issue se crea un _Pull Request_ hacia `master`. El _reviewer_ debería
hacer un _rebase_ en `master` (idealmente), pedir o no cambios, y luego proceder con
el _merge_.

Si se logró hacer el _merge_ correctamente el _branch_ debiese ser eliminado.
