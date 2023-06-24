export default defineEventHandler((event:any) => {
    console.log('New request **$$$: ' + getRequestURL(event))
    
  })