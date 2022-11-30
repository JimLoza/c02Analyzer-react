import React from 'react'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'

type Props = {
    date: any,
    data: any
}

export const Card: React.FC<any> = ({date, data}) => {
    return (
        <CardContent>
            <Typography variant="h6">
                Fecha: 
                {date}
            </Typography>
            <Typography variant="body1">
                Calidad del aire: {data}
            </Typography>
        </CardContent>
    )
}
