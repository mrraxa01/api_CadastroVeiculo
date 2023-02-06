
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

#### Create new vehicle

```http
  POST /vehicles/
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|   vehicles   | `json` | Cria um novo objeto|

#### Get all items

```http
  GET /vehicles
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|     -     |     -    |Lista todos os veículos cadastrados|

#### Get item

```http
  GET /vehicles/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Busca um veículo pelo ID |

#### Get item by name

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

#### Remove item

```http
  Delete /vehicles/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Remove um veículo pelo ID |
