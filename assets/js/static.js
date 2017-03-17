var TIME_UNIT = ['月', '季', '半年', '年']
var LLB_TYPE = ['包月', '季度', '半年', '包年', '加餐'];
var LLB_MONTH = 0;
var LLB_SEASON = 1;
var LLB_HALF_YEAR = 2;
var LLB_YEAR = 3;
var LLB_EXTRA = 4;
var LLB_M_PRICE = [['0M', 0, 0], ['5M', 1, 2], ['10M', 2, 3],
['30M', 3, 4], ['50M', 4, 5], ['70M', 5, 6], ['100M', 6, 8],
['200M', 9, 12], ['300M', 12, 16], ['500M', 18, 24], ['700M', 25, 32],
['1G', 30, 40], ['2G', 45, 60], ['3G', 60, 80], ['4G', 75, 100],
['6G', 105, 135], ['8G', 135, 175], ['10G', 150, 200], ['15G', 210, 270],
['20G', 270, 350], ['30G', 390, 500], ['50G', 600, 780], ['100G', 1100, 1400], ['300G', 3000, 3800], ['500G', 4500, 5500]];
var LLB_S_PRICE = [['0M', 0, 0], ['300M', 20, 25], ['1G', 40, 50], ['2G', 60, 80], ['4G', 120, 160]];
var LLB_H_PRICE = [['0M', 0, 0], ['500M', 35, 45], ['1G', 70, 90], ['3G', 120, 155], ['6G', 180, 230], ['12G', 270, 350], ['24G', 450, 600]];
var LLB_Y_PRICE = [['0M', 0, 0], ['2G', 90, 115], ['3G', 120, 155], ['4G', 150, 195], ['6G', 210, 270], ['12G', 360, 460], ['24G', 540, 700], ['36G', 720, 930], ['48G', 900, 1170]];
var LLB_E_PRICE = [['0M', 0, 0], ['230M', 3, 4], ['100M', 6, 8], ['300M', 12, 16], ['500M', 18, 24], ['1G', 30, 40], ['3G', 60, 80]];
