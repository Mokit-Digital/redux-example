// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../utils/db/dbConnect'
import { index } from '../../controllers/carsControllers'

dbConnect()

export default (req, res) => {
  index(req, res)   
}
