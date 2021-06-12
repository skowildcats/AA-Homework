function mysteryScoping1() {
  var x = 'out of block';
  console.log(x);
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping3() {
  const x = 'out of block';
  //cant redeclar x to var but can be declared to let
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  //can't redeclar let but can be updated
  x = 'out of block again';
  console.log(x);
}

// mysteryScoping1()
// mysteryScoping2()
// mysteryScoping3()
// mysteryScoping4()
mysteryScoping5()
