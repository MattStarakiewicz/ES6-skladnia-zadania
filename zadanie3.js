const average = (...args) => { let arg = 0;
      for (let i=0; i < args.length; i++) {
        arg += args[i];
      }
      console.log(arg / args.length);
}

average(1) // 1
average(1, 3) // 2
average(1, 3, 6, 6) // 4