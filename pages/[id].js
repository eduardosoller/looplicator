export default function Page({data}){
    return <div>
        {data.loops.join(', ')}
    </div>
}

export async function getStaticPaths(){
    return {
        paths: [
            {params: {id: "123"}}
        ],
        fallback: false
    }
}

export async function getStaticProps(){
    const fs = require('fs')
    const data = fs.readFileSync('data/123.json').toString()

    return {
        props: {
            data: JSON.parse(data)
        }
    }
}
