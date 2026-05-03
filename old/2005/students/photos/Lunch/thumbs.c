#!/bin/sh

#Convert path
#convert="/usr/bin/convert"

#HTML file name
htmlfile="default.html"

#Image extension
ext="JPG"
mext="*."$ext

#Thumbnail prefix
thumbprefix="tbnl_"

#Thumbnail size
width=120
height=120
size=$width"x"$height

#Picture per row
picperrow=5

remove_spaces ()
{
for filename in $mext
	do
	if [[ $filename = *[" "]* ]]
	then
		echo 'Replacing spaces in '$filename
		mv -f "$filename" `echo $filename | tr ' ' '_'`
	fi
done
}

create_thumbnail()
{
for filename in $mext
	do
	if [ ! -e $thumbprefix$filename ]
	then
		if [[ $filename != ${thumbprefix}* ]]
		then
			thumbname=$thumbprefix$filename
			echo 'Making '$filename 'into thumbnail '$thumbname
			convert -size $size $filename -resize $size $thumbname
		fi
	fi
done
}

create_html()
{
touch $htmlfile
echo "<HTML>" >> $htmlfile
echo "<CENTER>" >> $htmlfile
echo "<TABLE>" >> $htmlfile
echo "<TR>" >> $htmlfile

filecount=0
for filename in $mext
        do
	if [[ $filename != ${thumbprefix}* ]]
	then
		if [[ $filecount != $picperrow ]]
		then
			echo "<td><a href="$filename"><img src="$thumbprefix$filename" width="$width" height="$height" alt="$filename"></a><br />" >> $htmlfile
			#echo $filename"</td>" >> $htmlfile #uncomment to show picture name under picture, causes problems with long names
			(( filecount += 1 ))
		else
			echo "</TR><TR>" >> $htmlfile
                        echo "<td><a href="$filename"><img src="$thumbprefix$filename" width="$width" height="$height" alt="$filename"></a><br />" >> $htmlfile
			filecount=1
		fi
	fi
done
echo "</TABLE>" >> $htmlfile
echo "</CENTER>" >> $htmlfile
echo "</HTML>" >> $htmlfile
echo $htmlfile" has been completed"
}

if [ -x $convert ]
then
	if [ ! -e $htmlfile ]
	then
		remove_spaces
		create_thumbnail
		create_html
		echo "Program Successfully Completed"
		exit 0
	else
		echo $htmlfile" has already been created, program exiting"
		exit 1
	fi
else
	echo "Convert programmed not found, please install Image Magick"
fi

exit 0
