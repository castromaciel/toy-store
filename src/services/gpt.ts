import axios from 'axios'

export const getDescription = async ({ title }: { title: string }) => {
  try {
    const token = localStorage.getItem('token')

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://vps-3739175-x.dattaweb.com:4000/api/product/description',
      headers: { 
        'Content-Type': 'application/json', 
        Authorization: `Bearer ${token}`
      },
      data: { title }
    }

    const response = await axios.request(config)
    return response.data
  } catch (error) {
    console.error('Error al obtener la descripción:', error)
    return error
  }
}
