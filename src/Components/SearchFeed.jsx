import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { Videos } from './'
import { fetchFromAPI } from '../Utils/fetchFromAPI'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet,id&q=${searchTerm}`).then((data) => {
      setVideos(data.items)
    })
  }, [searchTerm])

  return (
    <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
        Search results for{' '}
        <span style={{ color: '#f31503' }}>{searchTerm}</span>
      </Typography>
      <div style={{ margin: '0 5%' }}>
        <Videos videos={videos} />
      </div>
    </Box>
  )
}

export default SearchFeed
