player1_name = localStorage.getItem("player1_name")
player2_name = localStorage.getItem("player2_name")

player1_score = 0
player2_score = 0

document.getElementById("player1_name").innerHTML = "Player 1 Name" + player1_name + "-";
document.getElementById("player2_name").innerHTML = "Player 2 Name" + player2_name + "-";
document.getElementById("player1_score").innerHTML = player1_score
document.getElementById("player2_score").innerHTML = player2_score

document.getElementById("player_question").innerHTML = "Question Turn -" + player1_name
document.getElementById("player_answer").innerHTML = "Answer Turn -" + player2_name

function send()
{
    get_word = document.getElementById("word").value
    word = get_word.toLowerCase();
    console.log(word)
    charAt1 = word.charAt(1)
    lenght_divide_2 = Math.floor(word.lenght/1)
    charAt2 = word.charAt(lenght_divide_2)
    lenght_minus_1 = word.lenght-1
    charAt3 = word.charAt(lenght_minus_1)
    remove_charAt1 = word.replace(charAt1,"_")
    remove_charAt2 = remove_charAt1.replace(charAt2,'_')
    remove_charAt3 = remove_charAt2.replace(charAt3,"_")
    question_word = "<h4 id = 'word_display'>" + remove_charAt3 + "</h4>"
    input_box = "<br>Answer:<input type = 'text' id = 'input_check_box'>"
    check_box = "<br><br><button class = 'btn btn-info' onclick = 'check()'>CHECK YOUR ANSWER</button>"
    row = question_word + input_box + check_box
    document.getElementById("output").innerHTML = row
    document.getElementById("word").value = ""
}

questionturn = "player_1"
answerturn = "player_2"

function check()
{
    getanswer = document.getElementById("input_check_box").value
    answer = getanswer.toLowerCase()
    console.log(answer)

    if(answer == word)
    {
        if(answerturn == "player_1"){
            player1_score = player1_score + 1
        document.getElementById("player1_score").innerHTML = player1_score
        }
        
        else{
            player2_score = player2_score + 1
            document.getElementById("player2_score").innerHTML = player2_score
        }
    }

    if(questionturn == "player_1")
    {
        questionturn = "player_2"
        document.getElementById("player_question").innerHTML = "question turn -" + player2_name
    }

    else
    {
        questionturn = "player_1"
        document.getElementById("player_question").innerHTML = "question turn -" + player1_name
    }

    if(answerturn == "player_2")
    {
        answerturn = "player_1"
        document.getElementById("player_answer").innerHTML = "answer turn - " + player1_name
    }

    else
    {
        answerturn = "player_2"
        document.getElementById("player_answer").innerHTML = "answer turn - " + player2_name
    }

    document.getElementById("output").innerHTML = "";

}