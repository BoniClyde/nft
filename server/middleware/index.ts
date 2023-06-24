export default defineEventHandler((event:any) => {
    console.log('New request --- jjj: ' + getRequestURL(event))


    event.response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

    
  })