import colors from 'colors';
import server from './server';


server.listen(process.env.PORT, () => {
    console.log(colors.cyan.bold(`REST API in port ${process.env.PORT}`))
})