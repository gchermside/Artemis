#!/usr/bin/env perl

#vars
$counter = 0;
$THMB_DIR = "./thmb";
$THMB_PREFIX = "thmb_";

# opening directory and reading files
opendir(CUR_DIR, "./");
@allpics = readdir CUR_DIR;

# printing HTML header
print <<ENDHEADER;
<HTML>
<BODY BG='#FFFFFF' TEXT='#000000'> 
<CENTER>
<TABLE CELLSPACING='7'>
ENDHEADER


foreach $file (@allpics)
{

	if($file =~ /\.jpg$/i)
	{
		if($counter % 3 == 0)
		{
			print "<TR>\n";
		}	
	
		print <<ENDTHUMBS;
		<TD WIDTH='210' VALIGN="top"><CENTER>
		<A HREF=\"$file\">
		<IMG SRC=\"$THMB_DIR/$THMB_PREFIX$file\" BORDER='0'>
		</A><BR>
		</TD>
ENDTHUMBS
		
		if($counter % 3 == 2)
		{
			print "</TR>\n";
		}
	
		$counter++;
	}
}
print <<ENDHEADER;
</TABLE>
</BODY>
</HTML>
ENDHEADER

