dir=$(pwd)
echo $dir
str=${dir:17}
echo $str

git remote add origin git@github.com:minorhash/$str.git
