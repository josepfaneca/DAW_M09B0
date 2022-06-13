$(document).ready(function(){
	var myPlaylist = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_N",
		cssSelectorAncestor: "#jp_container_N"
	}, [
		{
            title:"XXV Festa del Renaixement",
            artist:"Tortosa Turisme",
            m4v:"../videos/Anunci de la XVII Festa del Renaixement.m4v",
            ogv: "../videos/Anunci de la XVII Festa del Renaixement.ogv",
            //webmv: "../videos/Anunci de la XVII Festa del Renaixement.webm",
            poster:"../imatges/posterRenaixement.jpg"
        },
        {
            title:"Sònar 2022",
            artist:"ADVANCED MUSIC, S.L",
            m4v: "../videos/This is Sónar Festival.m4v",
            ogv: "../videos/This is Sónar Festival.ogv",
            //webmv: "../videos/This is Sónar Festival.webm",
            poster: "../imatges/posterSonar.jpg"
        },
        {
            title:"Tradicionarus 2022",
            artist:"Centre Artesà Tradicionarus",
            m4v: "../videos/Tradicionàrius 35 I presentació grups 2022.m4v",
            ogv: "../videos/Tradicionàrius 35 I presentació grups 2022.ogv",
            //webmv: "../videos/Tradicionàrius 35 I presentació grups 2022.ogv",
            poster: "../imatges/posterTradicionarus.jpg"
        }
	], {
		playlistOptions: {
			enableRemoveControls: true
		},
		swfPath: "../dist/jplayer",
		supplied: "webmv, ogv, m4v",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		audioFullScreen: true
	});

});