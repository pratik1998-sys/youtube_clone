import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from '../Utils/fetchFromAPI'
import { Videos, ChannelCard } from './'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      console.log(data.items[0])
      setChannelDetail(data?.items[0])
    })

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setVideos(data?.items)
      }
    )
  }, [id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div
          style={{
            background: 'rgb(2,0,36)',
            background:
              'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 39%, rgba(237,30,184,1) 90%)',
            zIndex: 10,
            height: '300px',
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop={`-110px`} />
      </Box>
      <Box display='flex' p={2}>
        <Box sx={{ mr: { sm: '110px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail
