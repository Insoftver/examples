import React, { useState, useEffect } from 'react'

export default function UsePokeApi() {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
                if(!response.ok){
                    throw new Error('Error getting data')
                }

                const data = await response.json()
                setList(data.results)
                setLoading(false)

            } catch (error) {
                setError(error.message)
                setLoading(false)
            }
        }

        fetchPokemon()
    }, [])
    

  return {
    list,
    loading,
    error
  }
}
