var LL_MODE = [['流量包', 'assets/mod/mod-data-pack.html'], ['共享池', 'assets/mod/mod-data-pool.html']]
var LLB = 0;
var LLC = 1;

var LL_TYPE = ['定向', '非定向'];
var LL_DX = 0;
var LL_FDX = 1;

var TIME_UNIT = ['月', '季', '半年', '年'];
var TIME_LEN = [1, 3, 6, 12]
var LLB_TIME = ['包月', '包季', '半年', '包年'];
var LLB_MONTH = 0;
var LLB_SEASON = 1;
var LLB_HALF_YEAR = 2;
var LLB_YEAR = 3;

var LLB_PRICE = [[['0M', 0, 0], ['5M', 1, 2], ['10M', 2, 3],
['30M', 3, 4], ['50M', 4, 5], ['70M', 5, 6], ['100M', 6, 8],
['200M', 9, 12], ['300M', 12, 16], ['500M', 18, 24], ['700M', 25, 32],
['1G', 30, 40], ['2G', 45, 60], ['3G', 60, 80], ['4G', 75, 100],
['6G', 105, 135], ['8G', 135, 175], ['10G', 150, 200], ['15G', 210, 270],
['20G', 270, 350], ['30G', 390, 500], ['50G', 600, 780], ['100G', 1100, 1400], ['300G', 3000, 3800], ['500G', 4500, 5500]],
[['0M', 0, 0], ['300M', 20, 25], ['1G', 40, 50], ['2G', 60, 80], ['4G', 120, 160]],
[['0M', 0, 0], ['500M', 35, 45], ['1G', 70, 90], ['3G', 120, 155], ['6G', 180, 230], ['12G', 270, 350], ['24G', 450, 600]],
[['0M', 0, 0], ['2G', 90, 115], ['3G', 120, 155], ['4G', 150, 195], ['6G', 210, 270], ['12G', 360, 460], ['24G', 540, 700], ['36G', 720, 930], ['48G', 900, 1170]]];
var LLB_E_PRICE = [['0M', 0, 0], ['230M', 3, 4], ['100M', 6, 8], ['300M', 12, 16], ['500M', 18, 24], ['1G', 30, 40], ['3G', 60, 80]];

var LLC_PRICE = [['0M', 0, 0, 0], ['10M', 2, 3, 10], ['30M', 3, 4, 30], ['50M', 4, 5, 50], ['70M', 5, 6, 70], 
['100M', 6, 8, 100], ['200M', 9, 12, 200], ['300M', 12, 16, 300], ['500M', 18, 24, 500], ['700M', 25, 32, 700],
['1G', 30, 40, 1000], ['2G', 45, 60, 2000], ['3G', 60, 80, 3000], ['4G', 75, 100, 4000], ['6G', 105, 135, 6000], 
['8G', 135, 175, 8000], ['10G', 150, 200, 10000], ['15G', 210, 270, 15000], ['20G', 270, 350, 20000], ['30G', 390, 500, 30000], ['50G', 600, 780, 50000]];

var YYB_PRICE = [['0min', 0], ['15min', 5], ['30min', 9], ['50min', 15], ['100min', 29], ['200min', 39], ['300min', 49], ['500min', 79], ['700min', 99]];

var DXB_PRICE = [['0条', 0], ['12条', 1], ['25条', 2], ['50条', 4], ['100条', 8], ['200条', 15], ['500条', 35], ['1000条', 60]];
