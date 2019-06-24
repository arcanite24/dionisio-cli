export default (type: any, subject: any, start: any = new Date()) => (
  status: any,
  payload: any = null,
  end: any = new Date()
) => ({
  type,
  subject,
  status,
  timing: end - start,
  ...(payload && { payload })
})
