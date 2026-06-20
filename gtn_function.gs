//GS Mode Running:::
// GameScript v1.0 Start
Game Function;
# Game; Guess the number 
___
Math.random()
text-box(limit"1-10"; style"Classic Modern")
___
subtitle.print-text:{Am thinking of an number, can you guess it? Pick a number from 1-10.}
___
<if>Number less...:
Running::End Text/headingone.custom.print-text:{Your number is lower then the number you answered, please try again.};
<if>Number more...:
Running::End Text/headingone.custom.print-text:{Your number is higher then the number you answered, please try again.};
<if>Number right...:
Running::End Text/headingone.custom.print-text:{Your number is correct! Click "Play Again" to play again};
___
Embed::: "<if>Number right...:" / <create>Make button appear: button "Play again"</create> Grab:"<create></create>"\ Function::: Restart Game
After ""Function::: Restart Game""; <repeat embed:::> "<if>Number less...:"; "<if>Number more...:"; "<if>Number right...:"; </repeat embed:::>
___
## Style
Wallpaper:"Red #FF0303"
___

