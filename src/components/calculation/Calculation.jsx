import React, {useMemo} from 'react'

function Calculation({number}) {
    const result = useMemo(() => {
        console.log('Realizando cálculo costoso...')

        let result = 0
        for(let i = 0; i < 1000000000; i++) {
            result += number
        }
        return result
    }, [number])

    return <div>Result {result}</div>
}

export default Calculation