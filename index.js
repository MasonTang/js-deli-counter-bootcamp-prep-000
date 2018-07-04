const katzDeliLine = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var num = katzDeliLine.length
  return `Welcome, ${name}. You are number ${num} in line.`
}

function nowServing (katzDeliLine){ 
  var arr = []
  if(katzDeliLine.length === 0 ){ 
    arr.push('There is nobody waiting to be served!')
    return arr
  }else{ 
    arr.push(`Currently serving ${katzDeliLine[0]}`)
    katzDeliLine.shift()
    return arr
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return 'The line is currently empty.'
  }else {
      var arr = []
      for(var i = 0; i < katzDeliLine.length; i++){
        var number = i + 1
        arr.push(`${number}. ${katzDeliLine[i]}`)
      }
      return `The line is currently: ${arr.join(', ')} `
  }
}