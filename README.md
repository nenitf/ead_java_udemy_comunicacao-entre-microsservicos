# ead_java_udemy_comunicacao-entre-microsservicos

> Projeto referente a [este](https://www.udemy.com/course/comunicacao-entre-microsservicos/) curso.

![objetivo](objetivo.jpg)

![arquitetura](arquitetura.jpg)

## Desenvolvimento

1. Suba o ambiente
    ```sh
    docker-compose up -d
    ```

    > Pare o ambiente com ``docker-compose down``

    > Acesse um serviço com ``docker-compose exec <service-name-no-docker-compose> /bin/bash``

2. Suba as aplicações
    1. Auth API
        ```sh
        docker-compose exec auth-api yarn startDev
        ```

        > ``localhost:8080/api/status``

    2. Product API
        ```sh
        docker-compose exec product-api gradle bootRun
        ```

        > ``localhost:8081/api/status``

    3. Sales API
        ```sh
        docker-compose exec sales-api yarn startDev
        ```

        > ``localhost:8082/api/status``
