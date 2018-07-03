

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  for(var i = 0; i < katzDeliLine.length; i++)
    var num = i + 1
  return `Welcome, ${katzDeliLine}. You are number ${num} in line.`
}