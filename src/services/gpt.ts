import axios from 'axios'

export const getDescription = async ({ title }: { title: string }) => {
  try {
    const data = JSON.stringify({
      description: `Dame una description de un ${title} para vender en 50 caracteres`
    })

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://vps-3739175-x.dattaweb.com:4000/api/product',
      headers: { 
        'Content-Type': 'application/json', 
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsidXNlcklkIjoiNjU1MDMyMjk3MTRhMGE3MTBkMjcyMTc2In0sImlhdCI6MTY5OTgwNjYzOSwiZXhwIjoxNjk5ODA2NjQyfQ.kaDEDpir1aP0t2LqVsmc8RwshRnPxRmJ39iCxXfILbQ'
      },
      data
    }

    const response = await axios.request(config)
    return response.data
  } catch (error) {
    console.error('Error al obtener la descripción:', error)
    throw error
  }
}
