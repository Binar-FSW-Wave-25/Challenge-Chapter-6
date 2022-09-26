const playerBatuBtn = document.querySelector('.wrapper-batu-satu');
		const playerKertasBtn = document.querySelector('.wrapper-kertas-satu');
		const playerGuntingBtn = document.querySelector('.wrapper-gunting-satu');
        const computerBatuBtn = document.querySelector('.wrapper-batu-dua');
		const computerKertasBtn = document.querySelector('.wrapper-kertas-dua');
		const computerGuntingBtn = document.querySelector('.wrapper-gunting-dua');
        const refreshBtn = document.querySelector('.refresh');
        const computerOptions = ['batu','kertas','gunting'];

    /* Batu */
        playerBatuBtn.addEventListener('click', function() {
            playerBatuBtn.classList.add('bg-grey');
            playerKertasBtn.classList.remove('bg-grey');
            playerGuntingBtn.classList.remove('bg-grey');

            const choiceNumber = Math.floor(Math.random()*3);
            const computerChoice = computerOptions[choiceNumber];
    
            if (computerChoice === 'batu') {
                computerBatuBtn.classList.add('bg-grey');
                computerKertasBtn.classList.remove('bg-grey');
                computerGuntingBtn.classList.remove('bg-grey');

                document.querySelector('.seri').classList.remove('hide');
                document.querySelector('.player-one').classList.add('hide');
                document.querySelector('.com-menang').classList.add('hide');
                document.querySelector('.versus').classList.add('hide');

            } else if (computerChoice === 'kertas') {
                computerKertasBtn.classList.add('bg-grey');
                computerBatuBtn.classList.remove('bg-grey');
                computerGuntingBtn.classList.remove('bg-grey');

                document.querySelector('.com-menang').classList.remove('hide');
                document.querySelector('.seri').classList.add('hide');
                document.querySelector('.player-one').classList.add('hide');
                document.querySelector('.versus').classList.add('hide');
            } else if (computerChoice === 'gunting') {
                computerGuntingBtn.classList.add('bg-grey'); 
                computerKertasBtn.classList.remove('bg-grey');
                computerBatuBtn.classList.remove('bg-grey');

                document.querySelector('.player-one').classList.remove('hide');
                document.querySelector('.com-menang').classList.add('hide');
                document.querySelector('.seri').classList.add('hide');
                document.querySelector('.versus').classList.add('hide');
            } 
        });
    /* Batu Selesai */
    /* Kertas */   
        playerKertasBtn.addEventListener('click', function() {
            playerKertasBtn.classList.add('bg-grey');
            playerBatuBtn.classList.remove('bg-grey');
            playerGuntingBtn.classList.remove('bg-grey');

            const choiceNumber = Math.floor(Math.random()*3);
            const computerChoice = computerOptions[choiceNumber];

            if (computerChoice === 'batu') {
                computerBatuBtn.classList.add('bg-grey');
                computerKertasBtn.classList.remove('bg-grey');
                computerGuntingBtn.classList.remove('bg-grey');

                document.querySelector('.seri').classList.add('hide');
                document.querySelector('.player-one').classList.remove('hide');
                document.querySelector('.com-menang').classList.add('hide');
                document.querySelector('.versus').classList.add('hide');

            } else if (computerChoice === 'kertas') {
                computerKertasBtn.classList.add('bg-grey');
                computerBatuBtn.classList.remove('bg-grey');
                computerGuntingBtn.classList.remove('bg-grey');

                document.querySelector('.com-menang').classList.add('hide');
                document.querySelector('.seri').classList.remove('hide');
                document.querySelector('.player-one').classList.add('hide');
                document.querySelector('.versus').classList.add('hide');
            } else if (computerChoice === 'gunting') {
                computerGuntingBtn.classList.add('bg-grey'); 
                computerKertasBtn.classList.remove('bg-grey');
                computerBatuBtn.classList.remove('bg-grey');

                document.querySelector('.player-one').classList.add('hide');
                document.querySelector('.com-menang').classList.remove('hide');
                document.querySelector('.seri').classList.add('hide');
                document.querySelector('.versus').classList.add('hide');
            }
        });
    /* Kertas Selesai */
    /* Gunting */    
        playerGuntingBtn.addEventListener('click', function() {
            playerGuntingBtn.classList.add('bg-grey');
            playerKertasBtn.classList.remove('bg-grey');
            playerBatuBtn.classList.remove('bg-grey');

            const choiceNumber = Math.floor(Math.random()*3);
            const computerChoice = computerOptions[choiceNumber];

            if (computerChoice === 'batu') {
                computerBatuBtn.classList.add('bg-grey');
                computerKertasBtn.classList.remove('bg-grey');
                computerGuntingBtn.classList.remove('bg-grey');

                document.querySelector('.seri').classList.add('hide');
                document.querySelector('.player-one').classList.add('hide');
                document.querySelector('.com-menang').classList.remove('hide');
                document.querySelector('.versus').classList.add('hide');

            } else if (computerChoice === 'kertas') {
                computerKertasBtn.classList.add('bg-grey');
                computerBatuBtn.classList.remove('bg-grey');
                computerGuntingBtn.classList.remove('bg-grey');

                document.querySelector('.com-menang').classList.add('hide');
                document.querySelector('.seri').classList.add('hide');
                document.querySelector('.player-one').classList.remove('hide');
                document.querySelector('.versus').classList.add('hide');
            } else if (computerChoice === 'gunting') {
                computerGuntingBtn.classList.add('bg-grey'); 
                computerKertasBtn.classList.remove('bg-grey');
                computerBatuBtn.classList.remove('bg-grey');

                document.querySelector('.player-one').classList.add('hide');
                document.querySelector('.com-menang').classList.add('hide');
                document.querySelector('.seri').classList.remove('hide');
                document.querySelector('.versus').classList.add('hide');
            }
        });
    /* Gunting Selesai */
    /* Refresh */
        refreshBtn.addEventListener('click', function() {
            playerBatuBtn.classList.remove('bg-grey');
            playerKertasBtn.classList.remove('bg-grey');
            playerGuntingBtn.classList.remove('bg-grey');
            computerKertasBtn.classList.remove('bg-grey');
            computerBatuBtn.classList.remove('bg-grey');
            computerGuntingBtn.classList.remove('bg-grey');

            document.querySelector('.seri').classList.add('hide');
            document.querySelector('.player-one').classList.add('hide');
            document.querySelector('.com-menang').classList.add('hide');
            document.querySelector('.versus').classList.remove('hide');
        })
    /* Refresh Selesai */