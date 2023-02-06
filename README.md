
# api_CadastroVeiculo
Projeto Final Módulo 5 - OiDevs - ADA LetsCode

API para cadastro de veículos utilizando:
    -Node.js
    -Javascript
    -Express
    -Sqlite







## Instalação

Para instalar e rodar essa API localmente:


```bash
   git clone https://github.com/mrraxa01/OiDevs_APIModulo5.git
   npm install
   npm start
```
    
## models
 - user
 ```javascript
 user{
   name:string,
   email:string,
   password:string
 }
 ```


 - vehicle

```javascript
vehicle{
  id:string,
  license:string,
  manufacturer: string,
  model:string,
  owner: userId
}
}
```


## API Reference

#### Create new user

```http
  POST /users/
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|   user   | `json` | Cria um novo objeto|

#### Get all vehicles

```http
  GET /users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|     -     |     -    |Lista todos os usuários cadastrados|

#### Get user by id

```http
  GET /users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Busca um usuário pelo ID |


#### Create new vehicle

```http
  POST /vehicles/
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|   vehicle   | `json` | Cria um novo objeto|

#### Get all vehicles

```http
  GET /vehicles
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|     -     |     -    |Lista todos os veículos cadastrados|

#### Get vehicle by id

```http
  GET /vehicles/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Busca um veículo pelo ID |

#### Get vehicle by name

```http
  GET /vehicles/?name=
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Busca um veículo pelo nome |

#### Edit vehicle

```http
  PATCH /vehicles/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. |
| `field`|`string`| Campo a ser editado    |

#### Remove vehicle

```http
  Delete /vehicles/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Remove um veículo pelo ID |
## Author

- [@MárcioRodrigues](https://github.com/mrraxa01)

