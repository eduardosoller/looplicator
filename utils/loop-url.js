import crc32 from './crc32'

const hash = (str) => btoa(crc32(String(str))).substr(2).replace(/=/g,"")

export default (date, seq) => {
    return "https://s3-aws.etc.com/"+hash(date+"/"+seq)+".mp3";
}

