name=input("Hello! What is your name?")

print(name,", that's a nice name." " Today, you will be planning your own wedding!")
age=int(input("How old are you?"))

if age>20:
    print("Great, you are mature enough!")

else:
    print("Maybe a little too young, but it is good to plan ahead!")


print("Let us start with your venue.")


print("You can have your wedding at a country club, your friend's backyard, or on a yacht!")
venue=input("What do you prefer the best?")


if venue == "country club":
    print("Since you chose a country club, you have the choice of three specific themes. Diamonds, modern, or garden.")
    theme=input("What theme do you want?")
    if theme == "diamonds":
        print("Shiny! Common color schemes with diamonds are gray, silver and white.")
        color1=input("Which color do you think goes best with diamonds?")
        if color1 == "gray":
            print("I like it!")
