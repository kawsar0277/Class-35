let mark;

mark = 85

if(mark < 0 || mark > 100){
    console.log("Inavalid mark")
}

 else if(mark >= 80){ //80,81,82,83,84,85....99,100
    console.log("The grade is A+")
}

else if(mark >= 70){ //70,71,72,73,74.....77,78,79
    console.log("The grade is A")
}

else if(mark >= 60){//60,61,62,63,64.....68,69
    console.log("The grade is A-")
}

else if(mark >= 50){
    console.log("The grade is B")
}

else if(mark >= 40){//40,41,42,43......48,49,
    console.log("The grade is C")
}

else if(mark >= 33){//33,34,35,38,39
    console.log("The grade is D")
}

else{
    console.log("The grade is F")
}
