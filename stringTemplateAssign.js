function stringTemplateAssig(){

    var string=(`   My dream Company is "TCS".`);
    console.log(string);
    var myHobby1= "Playing Cricket,";
    var myHobby2= "Watching Movies,";
    var myHobby3= "Playing Kabaddi";

    console.log(`   2.1) My Hobbies are : ${myHobby1} ${myHobby2} ${myHobby3}`);
    var concat=myHobby1+myHobby2+myHobby3;
    console.log(`   2.2) My Hobbies after Concatination using String Template : ${concat}`);
}
stringTemplateAssig();

