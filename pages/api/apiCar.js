import dbConnect from '../../utils/db/dbConnect'
import { index, create } from '../../controllers/carsControllers'

dbConnect()

export default (req, res) => {
  if (req.method === 'POST') {
    create(req, res)
  }
  if(req.method === 'GET'){
    index(req, res)
  }
}
