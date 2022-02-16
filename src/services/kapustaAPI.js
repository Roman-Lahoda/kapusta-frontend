import axios from "axios"

const BASE_URL = 'https://capusta3.herokuapp.com/api/transactions'

export async function getBalance () {
    const balance = axios.get(`${BASE_URL}/balance`)
    console.log(balance)
    return balance
}
export async function setBalance (sum){
const result = axios.post(sum)
// или PUT
return result
}

// http://localhost:3000/api/transactions/balance 


// 6. http://localhost:3000/api/transactions/  - обрабатывает POST-запрос на добавление новой транзакции (любого типа)


