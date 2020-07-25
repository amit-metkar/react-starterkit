export default theme => {
    return {
        root: {
            textAlign: 'center',

            '& .App-header': {
                backgroundColor: '#282c34',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                fontSize: 'calc(10px + 2vmin)',
                color: 'white'
              }
        }
    }
}