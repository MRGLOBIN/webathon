module.exports = {
  port: 1337,
  dbUrl:
    'mongodb://mrgoblin:helloworld@ac-zd8rcni-shard-00-00.k8g5kc7.mongodb.net:27017,ac-zd8rcni-shard-00-01.k8g5kc7.mongodb.net:27017,ac-zd8rcni-shard-00-02.k8g5kc7.mongodb.net:27017/?ssl=true&replicaSet=atlas-ql8ldb-shard-0&authSource=admin&retryWrites=true&w=majority',
  saltRounds: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  publicKey: `-----BEGIN PUBLIC KEY-----
  MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCXF5LMNXId4kEx7BWRSUzyus6b
  ZGnQHEXp4AowDzsDLO/H1uThITsHlW/YtT9VFzbL8wtPH6nPXkioKRpj17AcD/xu
  NQf8L//l63NFU50rMv29N+sEV9WR3lUYbA/QLu2GzMt/4iDUMxgjq/nUtRftiFkW
  7zWzTHxR0Z1/9RvnUwIDAQAB
  -----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
  MIICXAIBAAKBgQCXF5LMNXId4kEx7BWRSUzyus6bZGnQHEXp4AowDzsDLO/H1uTh
  ITsHlW/YtT9VFzbL8wtPH6nPXkioKRpj17AcD/xuNQf8L//l63NFU50rMv29N+sE
  V9WR3lUYbA/QLu2GzMt/4iDUMxgjq/nUtRftiFkW7zWzTHxR0Z1/9RvnUwIDAQAB
  AoGAXh/eYH7vD3TSvoHfUboDSLddXGqqjG4Ak9jxH81tKuZEng7eWO11s5zBp5QJ
  1z118on/QpRsGfYXd0Lb4NUOLQaQvNFiL/jyjxjta9n4j9JVfcbx1FqsSH33Rbfm
  GTF7GsyDIChd7L9j1sXTkRSuF+JTEcRu6nqJfvLIC7UlCnECQQDcs31c6iBIVjjE
  Ymx0TVfEYd60V7GU3YGl2NhuxE6Lv7RySNvtvkoHN+Cot49V8Z+Q4VqRes2GZRSQ
  6uZdWAxJAkEAr0H41pFc8rbQAA39QB+jtYGAaw+TKucJzfQSfzSWcFfjRfzm6afj
  oon2NygRVrPN4rtfpKZbPWjdIFlRy8d+uwJBAM9C2JYrYQnNvx3eeI94GtZYOvcN
  670rkBeZ3xeWz1S6QdGZzsAkFg1VUmvfhoJlmT5MA+vfcaemwXuevZwnldECQBoR
  YgXoUT742i9n5UdobV1OCd/izS0QeHDd4PJyy/2h1PhQCbivdDh09N53YzzWOcWD
  wVIoPGIB+wIYxwXcgokCQE3rhdxhxtiYyEj7C8C+outntefUB+x8WwtSQOO5Ke68
  aHnnp14PfCazNdVcWx8e3ZW6BD5ReF1/csmpb1RouMA=
  -----END RSA PRIVATE KEY-----`,
}
