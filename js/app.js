/**
 * Tab Menu
 */
const tab = $('#tab').tabs({
	border: false,
	height: '90vw',
	fit: true,
	tabHeight: 50,
	tabWidth: '150px',
	tabPosition: 'left'
});



/**
 * Variables
 */
let dataSalesman = [
	{ id: 'S01', nama: 'Sales 01', handphone: '08111' },
	{ id: 'S02', nama: 'Sales 02', handphone: '08112' },
	{ id: 'S03', nama: 'Sales 03', handphone: '08113' }
]

let dataRetail = [
	{ id: 'R01', nama: 'Toko 01', alamat: 'jalan 1' },
	{ id: 'R02', nama: 'Toko 02', alamat: 'jalan 2' },
	{ id: 'R03', nama: 'Toko 03', alamat: 'jalan 3' }
]

let dataProduk = [
	{ id: 'P01', nama: 'Roti 01', harga: '5000' },
	{ id: 'P02', nama: 'Roti 02', harga: '10000' },
	{ id: 'P03', nama: 'Roti 03', harga: '15000' }
]

const DUIT = new Intl.NumberFormat(
	'id-ID',
	{ style: 'currency', currency: 'IDR' }
)

const formatUang = (val) => {
	if (!val) return '';

	return DUIT.format(val)
}

const formatAngka = (val) => {
	if ( val === null || typeof(val) == 'undefined' ) return ''

	return val + ' bh'
}

const formatTree = (node) => {
	let s = node.text;

	if (node.children) {
		s += '&nbsp;<span style=\'color:blue\'>(' + node.children.length + ')</span>';
	}

	return s;
}


let dataPivot = [{
	"id": 'S01',
	"name": "Sales 01",
	"harga": "",
	"alamat": "",
	"handphone": "08111",
	"children": [{
		"state": "open",
		"id": 'S01T01',
		"name": "Toko 01",
		"harga": "",
		"alamat": "jalan 1",
		"handphone": "",
		"children": [{
			"id": 'S01T01R01',
			"name": "Roti 01",
			"last_week": 25,
			"last_month": 220,
			"harga": "5000",
			"jumlah": 10,
			"handphone": "",
		}, {
			"id": 'S01T01R02',
			"name": "Roti 02",
			"last_week": 15,
			"last_month": 50,
			"harga": "10000",
			"jumlah": 10,
			"handphone": "",
		}, {
			"id": 'S01T01R03',
			"name": "Roti 03",
			"last_week": 5,
			"last_month": 20,
			"harga": "15000",
			"jumlah": 5,
			"handphone": "",
		}]
	}, {
		"state": "closed",
		"id": 'S01T02',
		"name": "Toko 02",
		"harga": "",
		"alamat": "jalan 2",
		"handphone": "",
		"children": [{
			"id": 'S01T02R01',
			"name": "Roti 01",
			"last_week": 50,
			"last_month": 220,
			"harga": "5000",
			"jumlah": 30,
			"handphone": "",
		}, {
			"id": 'S01T02R02',
			"name": "Roti 02",
			"last_week": 5,
			"last_month": 120,
			"harga": "10000",
			"jumlah": 20,
			"handphone": "",
		}, {
			"id": 'S01T02R03',
			"name": "Roti 03",
			"last_week": 5,
			"last_month": 50,
			"harga": "15000",
			"jumlah": 10,
			"handphone": "",
		}]
	}, {
		"state": "closed",
		"id": 'S01T03',
		"name": "Toko 03",
		"harga": "",
		"alamat": "jalan 3",
		"handphone": "",
		"children": [{
			"id": 'S01T03R01',
			"name": "Roti 01",
			"last_week": 5,
			"last_month": 140,
			"harga": "5000",
			"jumlah": 10,
			"handphone": "",
		}, {
			"id": 'S01T03R02',
			"name": "Roti 02",
			"last_week": 5,
			"last_month": 100,
			"harga": "10000",
			"jumlah": 5,
			"handphone": "",
		}, {
			"id": 'S01T03R03',
			"name": "Roti 03",
			"last_week": 5,
			"last_month": 54,
			"harga": "15000",
			"jumlah": 10,
			"handphone": "",
		}]
	}]
}, {
	"id": 'S02',
	"name": "Sales 02",
	"harga": "",
	"alamat": "",
	"handphone": "08112",
	"children": [{
		"state": "closed",
		"id": 'S02T01',
		"name": "Toko 01",
		"harga": "",
		"alamat": "jalan 1",
		"handphone": "",
		"children": [{
			"id": 'S02T01R01',
			"name": "Roti 01",
			"last_week": 5,
			"last_month": 230,
			"harga": "5000",
			"jumlah": 20,
			"alamat": "",
			"handphone": "",
		}, {
			"id": 'S02T01R02',
			"name": "Roti 02",
			"last_week": 5,
			"last_month": 70,
			"harga": "10000",
			"jumlah": 10,
			"alamat": "",
			"handphone": "",
		}, {
			"id": 'S02T01R03',
			"name": "Roti 03",
			"last_week": 5,
			"last_month": 65,
			"harga": "15000",
			"jumlah": 5,
			"alamat": "",
			"handphone": "",
		}]
	}, {
		"state": "closed",
		"id": 'S02T02',
		"name": "Toko 02",
		"harga": "",
		"alamat": "jalan 2",
		"handphone": "",
		"children": [{
			"id": 'S02T02R01',
			"name": "Roti 01",
			"last_week": 5,
			"last_month": 435,
			"harga": "5000",
			"jumlah": 20,
			"alamat": "",
			"handphone": "",
		}, {
			"id": 'S02T02R02',
			"name": "Roti 02",
			"last_week": 5,
			"last_month": 79,
			"harga": "10000",
			"jumlah": 30,
			"alamat": "",
			"handphone": "",
		}, {
			"id": 'S02T02R03',
			"name": "Roti 03",
			"last_week": 5,
			"last_month": 64,
			"harga": "15000",
			"jumlah": 0,
			"alamat": "",
			"handphone": "",
		}]
	}, {
		"state": "closed",
		"id": 'S02T03',
		"name": "Toko 03",
		"harga": "",
		"alamat": "jalan 3",
		"handphone": "",
		"children": [{
			"id": 'S02T03R01',
			"name": "Roti 01",
			"last_week": 5,
			"last_month": 245,
			"harga": "5000",
			"jumlah": 10,
			"alamat": "",
			"handphone": "",
		}, {
			"id": 'S02T03R02',
			"name": "Roti 02",
			"last_week": 5,
			"last_month": 96,
			"harga": "10000",
			"jumlah": 5,
			"alamat": "",
			"handphone": "",
		}, {
			"id": 'S02T03R03',
			"name": "Roti 03",
			"last_week": 5,
			"last_month": 46,
			"harga": "15000",
			"jumlah": 0,
			"alamat": "",
			"handphone": "",
		}]
	}]
}, {
	"id": 'S03',
	"name": "Sales 03",
	"harga": "",
	"alamat": "",
	"handphone": "08113",
	"children": [{
		"state": "closed",
		"id": 'S03T01',
		"name": "Toko 01",
		"harga": "",
		"alamat": "jalan 1",
		"handphone": "",
		"children": [{
			"id": 'S03T01R01',
			"name": "Roti 01",
			"last_week": 5,
			"last_month": 80,
			"harga": "5000",
			"jumlah": 5,
			"alamat": "",
			"handphone": "",
		}, {
			"id": 'S03T01R02',
			"name": "Roti 02",
			"last_week": 5,
			"last_month": 50,
			"harga": "10000",
			"jumlah": 10,
			"alamat": "",
			"handphone": "",
		}, {
			"id": 'S03T01R03',
			"name": "Roti 03",
			"last_week": 5,
			"last_month": 20,
			"harga": "15000",
			"jumlah": 10,
			"alamat": "",
			"handphone": "",
		}]
	}, {
		"state": "closed",
		"id": 'S03T02',
		"name": "Toko 02",
		"harga": "",
		"alamat": "jalan 2",
		"handphone": "",
		"children": [{
			"id": 'S03T02R01',
			"name": "Roti 01",
			"last_week": 5,
			"last_month": 90,
			"harga": "5000",
			"jumlah": 5,
			"alamat": "",
			"handphone": "",
		}, {
			"id": 'S03T02R02',
			"name": "Roti 02",
			"last_week": 5,
			"last_month": 70,
			"harga": "10000",
			"jumlah": 5,
			"alamat": "",
			"handphone": "",
		}, {
			"id": 'S03T02R03',
			"name": "Roti 03",
			"last_week": 5,
			"last_month": 30,
			"harga": "15000",
			"jumlah": 10,
			"alamat": "",
			"handphone": "",
		}]
	}, {
		"state": "closed",
		"id": 'S03T03',
		"name": "Toko 03",
		"harga": "",
		"alamat": "jalan 3",
		"handphone": "",
		"children": [{
			"id": 'S03T03R01',
			"name": "Roti 01",
			"last_week": 5,
			"last_month": 66,
			"harga": "5000",
			"jumlah": 10,
			"alamat": "",
			"handphone": "",
		}, {
			"id": 'S03T03R02',
			"name": "Roti 02",
			"last_week": 5,
			"last_month": 45,
			"harga": "10000",
			"jumlah": 24,
			"alamat": "",
			"handphone": "",
		}, {
			"id": 'S03T03R03',
			"name": "Roti 03",
			"last_week": 5,
			"last_month": 87,
			"harga": "15000",
			"jumlah": 5,
			"alamat": "",
			"handphone": "",
		}]
	}]
	
}];




/**
 * Table
 */
const tblMasterSalesman = $('#tblMasterSalesman').datagrid({
	title: 'Salesman',
	collapsible: true,
	rownumbers: true,
	fitColumns: true,
	singleSelect: true,
	data: dataSalesman,
	pagination: true,
	columns: [[
		{ field: 'id', width: 30, title: '#ID' },
		{ field: 'nama', width: 100, title: 'Salesman' },
		{ field: 'handphone', width: 80, title: 'Handphone' },
	]]
})

const tblMasterRetail = $('#tblMasterRetail').datagrid({
	title: 'Toko',
	collapsible: true,
	rownumbers: true,
	fitColumns: true,
	singleSelect: true,
	data: dataRetail,
	pagination: true,
	columns: [[
		{ field: 'id', width: 30, title: '#ID' },
		{ field: 'nama', width: 100, title: 'Toko' },
		{ field: 'alamat', width: 80, title: 'Alamat' },
	]]
})

const tblMasterProduk = $('#tblMasterProduk').datagrid({
	title: 'Produk',
	collapsible: true,
	rownumbers: true,
	fitColumns: true,
	singleSelect: true,
	data: dataProduk,
	pagination: true,
	columns: [[
		{ field: 'id', width: 30, title: '#ID' },
		{ field: 'nama', width: 100, title: 'Nama' },
		{ field: 'harga', width: 80, title: 'Harga', align: 'right' },
	]]
})





/**
 * Treegrid
 */
let editingId;
let pivot

const reloadFooter = (a, b) => {
	// a = filed
	// b = row

	let totalProduk = 0;
	console.log(a, b)

	const rows = $(pivot).treegrid('getChildren');
	
	console.log(rows)
	
	totalProduk = rows
		.filter(x => { if (typeof (x.jumlah) != 'undefined') return x.jumlah })
		.map(x => x.jumlah)
		.reduce((x, y) => parseInt(x) + parseInt(y))

	console.log( totalProduk )

	let frow = $(pivot).treegrid('getFooterRows')

	if (typeof (frow) == 'undefined' ) {
		frow = [{
				iconCls: "icon-sum",
				name: "Total Produk",
				jumlah: totalProduk
		}]

		$(pivot).treegrid('reloadFooter', frow);
	} else {
		frow[0].jumlah = totalProduk

		$(pivot).treegrid('reloadFooter');
	}
}

const save = (a, b) => {
	if (editingId == undefined) return

	$(pivot).treegrid('endEdit', editingId)

	editingId = undefined

	reloadFooter()
}

const edit = () => {
	if (!$(pivot).treegrid('getSelected')) {
		alert('Pilih dahulu salah satu produk dalam daftar.')

		return
	}

	if (editingId != undefined) {
		$(pivot).treegrid('select', editingId);

		return;
	} else {
		save()
	}

	var row = $(pivot).treegrid('getSelected');

	if (row) {
		editingId = row.id

		$(pivot).treegrid('beginEdit', editingId);
	}
}

const cancel = () => {
	if (editingId == undefined) return
	
	$(pivot).treegrid('cancelEdit', editingId);
	
	editingId = undefined;
}


const toolbar = [{
	text: 'Edit',
	iconCls: 'icon-edit',
	handler: edit
}, {
	text: 'Batal',
	iconCls: 'icon-cancel',
	handler: cancel
}, '-', {
	text: 'Simpan',
	iconCls: 'icon-save',
	handler: save
}];


pivot = $('#treePivot').treegrid({
	title: 'Pendistribusian',
	collapsible: true,
	data: dataPivot,
	idField: 'id',
	treeField: 'name',
	fitColumns: true,
	showFooter: true,
	toolbar: toolbar,
	// onLoadSuccess: reloadFooter,
	onDblClickRow: edit,
	onClickCell: save,
	columns: [[
		{ title: 'Salesman', field: 'name', width: 80 },
		// { field: 'handphone', title: 'Handphone', width: 100 },
		{ field: 'alamat', title: 'Alamat', width: 100 },
		{ field: 'harga', title: 'Harga', width: 100, align: 'right', formatter: formatUang },
		{ field: 'last_week', title: 'Last Week', width: 100, align: 'right', formatter: formatAngka },
		{ field: 'last_month', title: 'Last Month', width: 100, align: 'right', formatter: formatAngka },
		{
			field: 'jumlah', title: 'Jumlah', width: 100, align: 'right', formatter: formatAngka,
			editor: 'numberbox'
		}
	]]
});

reloadFooter()

// pivot.treegrid('reloadFooter', [{
// 	iconCls: "icon-sum",
// 	name: "Total Produk",
// 	jumlah: 200
// }])
