import { type NextFunction, type Request, type Response } from 'express'

import { v4 as uuidv4 } from 'uuid'


const VerifyAndCreateTokenCustomerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { CUSTOMER_ID } = process.env
  if (CUSTOMER_ID === undefined) {
    throw new Error('CUSTOMER_ID não se encontra nas variaveis de ambiente!')
  }

  const customerId: string | undefined = req.cookies[CUSTOMER_ID]

  if (customerId === undefined) {
    res.cookie(CUSTOMER_ID, uuidv4(), {
      path: '/',
      secure: true,
      httpOnly: true,
      sameSite: "none"
    })
  }
  next()
}

export default VerifyAndCreateTokenCustomerUser
