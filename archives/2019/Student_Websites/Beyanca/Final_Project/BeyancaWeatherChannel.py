temp=int(input("What is the temperature today?"))

if temp >= 100:
    print("Too hot! Stay inside!")

elif temp >= 80 and temp < 100:
    print("Wear a tank top.")

elif temp >= 60 and temp < 80:
    print("A perfect day! Wear a t-shirt.")

elif temp >= 40 and temp < 60:
    print("Chilly! Bring a sweater.")

elif temp >= 20 and temp < 20:
    print("Burr! Bring a jacket!")

else:
    print("Too cold! Stay inside!")
