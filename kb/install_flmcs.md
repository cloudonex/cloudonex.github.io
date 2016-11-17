* Upload Billing zip file
* Login ssh using root
* Go to the directory
* Run unzip command ( unzip f2.zip )
* Delete f2.zip ( rm f2.zip )
* Delete index.html ( rm index.html )
* Edit Database Details & Application URL sysfrm/config.php ( nano sysfrm/config.php )
* Edit Database Details server/c.php ( nano server/c.php )
* Import database Using PhpMyAdmin (sysfrm/install/primary.sql)
* Go to Bdinfosys management Portal add FLMCS entry [ Use a Random Server Directory ]
* Rename the server directory ( mv server random_server_directory )
* Change Ownership using WinSCP
* Now Browse The Domain [ Default Username & Password is – admin / 123456 ]