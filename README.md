<h1 align="center">GameScript Code Language</h1>
Welcome to GameScript! GameScript is a code language designed to create mini-games like guess the number, shooting games, and more. 

___
# Examples
> Here in `# Examples`, we will show you examples of our code language (CL) we created.
___
 # Guess the Number Example
 ```
// GS Mode Running:::
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
```
This make's a guess the number game using true logic, and the wallpaper is `Red #FF0303`. 
___
# Shooting Game Example
Game Coming Soon On Mode `GameScript v3.0 Action` or higher.
___
<h1 align="center">Modes of GSCL (GameScript Code Language)</h1>

| Full Name | Runtime Engine | Setup Satus |
| :--- | :--- | :--- |  
| GameScript v1.0 Start  | GS-1.0S | Complete |
| GameScript v1.5 Pro    | GS-1.1P | Planned |
| GameScript v2.0 Start  | GS-2.0S | Planned | 
| GameScript v2.5 Pro    | GS-2.5P | Planned |
| GameScript v3.0 Action | GS-3.0A | Planned |
| GameScript v3.5 Action | GS-3.5A | Planned |
| GameScript v4.0 Action | GS-4.0A | Planned |
| GameScript v4.5 Action | GS-4.5A | Planned |
| GameScript v5.0 Action | GS-5.0A | Planned | 
| GameScript v5.5 Action | GS-5.5A | Planned | 
| GameScript v8.5 Action | GS-8.5AU | Planned | 
| GameScript v9.0 Action Pro | GS-9.0 | Planned | 
| GameScript v9.5 Action Pro | GS-9.5 | Planned | 
| GameScript v10.0 Action Pro | GS-10.0 | Pltanned |
| GameScript v6.0 Apex | GS-6.0A | Planned |
| GameScript v6.5 Apex | GS-6.5A | Planned |
| GameScript v7.0 Apex Action | GS-7.0AA | Planned |
| GameScript v7.5 Apex Action | GS-7.5AA | Planned |
| GameScript v8.0 Apex Ultra | GS-8.0AU | Planned |
| GameScript v8.5 Apex Ultra | GS-8.5AU | Planned |
| GameScript v9.0 Essence | GS-9.0E | Planned | 
| GameScript v9.5 Essence | GS-9.5E | Planned | 
| GameScript v10.0 Essence | GS-10.0E | Planned | 
___
# Apache License 2.0
* This site is protected by the Apache License 2.0, see more information at https://www.apache.org/licenses/LICENSE-2.0.txt.
* Please feel free to contact: mailto:jacobalghamdi5@gmail.com.
