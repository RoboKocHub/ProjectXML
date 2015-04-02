// umoznuje nastavit pociatocny index pre indexaciu elementov (rozne verzie MSXML pouzivaju roznu indexaciu)
var baseIndex = 0;

// xPaths of Inputs
var xPOI = new Array();
xPOI['0_0_0_0']='/dokument/hlavicka/typDP/rdp';
xPOI['0_0_0_1']='/dokument/hlavicka/typDP/odp';
xPOI['0_0_0_2']='/dokument/hlavicka/typDP/ddp';
xPOI['0_0_1']='/dokument/hlavicka/danovy_urad';
xPOI['0_0_2']='/dokument/hlavicka/kod_do';
xPOI['0_0_3']='/dokument/hlavicka/dic';
xPOI['0_0_4']='/dokument/hlavicka/ico';
xPOI['0_0_5']='/dokument/hlavicka/pravna_forma';
xPOI['0_0_6']='/dokument/hlavicka/obch_meno';
//sidlo
xPOI['0_0_7_0']='/dokument/hlavicka/sidlo/ulica';
xPOI['0_0_7_1']='/dokument/hlavicka/sidlo/cislo';
xPOI['0_0_7_2']='/dokument/hlavicka/sidlo/psc';
xPOI['0_0_7_3']='/dokument/hlavicka/sidlo/obec';
xPOI['0_0_7_4']='/dokument/hlavicka/sidlo/stat';
//banka
xPOI['0_0_7_9_0']='/dokument/hlavicka/sidlo/banka[' + baseIndex + ']/nazov_banky';
xPOI['0_0_7_9_1']='/dokument/hlavicka/sidlo/banka[' + baseIndex + ']/ucet';
xPOI['0_0_7_9_2']='/dokument/hlavicka/sidlo/banka[' + baseIndex + ']/kod_banky';
//banka
xPOI['0_0_7_10_0']='/dokument/hlavicka/sidlo/banka[' + (baseIndex + 1) + ']/nazov_banky';
xPOI['0_0_7_10_1']='/dokument/hlavicka/sidlo/banka[' + (baseIndex + 1) + ']/ucet';
xPOI['0_0_7_10_2']='/dokument/hlavicka/sidlo/banka[' + (baseIndex + 1) + ']/kod_banky';
//opravnena_osoba
xPOI['0_0_8_0']='/dokument/hlavicka/opravnena_osoba/priezvisko';
xPOI['0_0_8_1']='/dokument/hlavicka/opravnena_osoba/meno';
xPOI['0_0_8_2']='/dokument/hlavicka/opravnena_osoba/titul';
xPOI['0_0_8_3']='/dokument/hlavicka/opravnena_osoba/postavenie';
//sidlo_oo
xPOI['0_0_8_4_0']='/dokument/hlavicka/opravnena_osoba/sidlo_oo/ulicacislo';
xPOI['0_0_8_4_1']='/dokument/hlavicka/opravnena_osoba/sidlo_oo/psc';
xPOI['0_0_8_4_2']='/dokument/hlavicka/opravnena_osoba/sidlo_oo/obec';
xPOI['0_0_8_4_3']='/dokument/hlavicka/opravnena_osoba/sidlo_oo/stat';
xPOI['0_0_9']='/dokument/hlavicka/pocet_priloh';
//zdanovacie_obd
xPOI['0_0_10_0_0']='/dokument/hlavicka/zdanovacie_obd/datum_od/den';
xPOI['0_0_10_0_1']='/dokument/hlavicka/zdanovacie_obd/datum_od/mesiac';
xPOI['0_0_10_1_0']='/dokument/hlavicka/zdanovacie_obd/datum_do/den';
xPOI['0_0_10_1_1']='/dokument/hlavicka/zdanovacie_obd/datum_do/mesiac';
xPOI['0_0_10_2']='/dokument/hlavicka/zdanovacie_obd/rok';
//body
	//xPOI['0_1_0']='/dokument/body/r100';
	//xPOI['0_1_0_0']='/dokument/r100/r100_z';
xPOI['0_1_0_1']='/dokument/body/r100';
xPOI['0_1_1']='/dokument/body/r110';
xPOI['0_1_2']='/dokument/body/r120';
xPOI['0_1_3']='/dokument/body/r130';
xPOI['0_1_4']='/dokument/body/r140';
xPOI['0_1_5']='/dokument/body/r150';
xPOI['0_1_6']='/dokument/body/r160';
xPOI['0_1_7']='/dokument/body/r170';
xPOI['0_1_8']='/dokument/body/r180';
xPOI['0_1_9']='/dokument/body/r190';
xPOI['0_1_10']='/dokument/body/r200';
xPOI['0_1_11']='/dokument/body/r210';
xPOI['0_1_12']='/dokument/body/r220';
xPOI['0_1_13']='/dokument/body/r230';
xPOI['0_1_14']='/dokument/body/r240';
xPOI['0_1_15']='/dokument/body/r250';
xPOI['0_1_16']='/dokument/body/r260';
xPOI['0_1_17']='/dokument/body/r270';
xPOI['0_1_18']='/dokument/body/r280';
xPOI['0_1_19']='/dokument/body/r290';
xPOI['0_1_20']='/dokument/body/r300';
xPOI['0_1_21']='/dokument/body/r310';
xPOI['0_1_22']='/dokument/body/r320';
xPOI['0_1_23']='/dokument/body/r330';
xPOI['0_1_24']='/dokument/body/r400';
xPOI['0_1_25']='/dokument/body/r410';
xPOI['0_1_26']='/dokument/body/r420';
xPOI['0_1_27']='/dokument/body/r430';
xPOI['0_1_28']='/dokument/body/r440';
xPOI['0_1_29']='/dokument/body/r450';
xPOI['0_1_30']='/dokument/body/r460';
xPOI['0_1_31']='/dokument/body/r470';
xPOI['0_1_32']='/dokument/body/r500';
xPOI['0_1_33']='/dokument/body/r510';
xPOI['0_1_34']='/dokument/body/r600';
//r610
xPOI['0_1_35_0']='/dokument/body/r610/text';
xPOI['0_1_35_1']='/dokument/body/r610/suma';
//r620
xPOI['0_1_36_0']='/dokument/body/r620/text';
xPOI['0_1_36_1']='/dokument/body/r620/suma';
xPOI['0_1_37']='/dokument/body/r630';
xPOI['0_1_38']='/dokument/body/r640';
xPOI['0_1_39']='/dokument/body/r650';
xPOI['0_1_40']='/dokument/body/r700';
xPOI['0_1_41']='/dokument/body/r710';
xPOI['0_1_42']='/dokument/body/r800';
//r810
xPOI['0_1_43_3']='/dokument/body/r810/suma';
//r820
xPOI['0_1_44_3']='/dokument/body/r820/suma';
xPOI['0_1_45']='/dokument/body/r830';
xPOI['0_1_46']='/dokument/body/r840';
xPOI['0_1_47']='/dokument/body/r850';
//r900
xPOI['0_1_48_3']='/dokument/body/r900/suma';
xPOI['0_1_49']='/dokument/body/r901';
xPOI['0_1_50']='/dokument/body/r902';
xPOI['0_1_51']='/dokument/body/r910';
//ddp_datum
xPOI['0_1_53']='/dokument/body/r920';
xPOI['0_1_54']='/dokument/body/r930';
xPOI['0_1_55']='/dokument/body/r940';
xPOI['0_1_56']='/dokument/body/r950';
xPOI['0_1_57']='/dokument/body/r960';
xPOI['0_1_58']='/dokument/body/r970';
//tabulky
xPOI['0_1_59_0']='/dokument/body/tab_a/r01';
xPOI['0_1_59_1']='/dokument/body/tab_a/r02';
xPOI['0_1_59_2']='/dokument/body/tab_a/r03';
xPOI['0_1_59_3']='/dokument/body/tab_a/r04';
xPOI['0_1_59_4']='/dokument/body/tab_a/r05';
xPOI['0_1_59_5']='/dokument/body/tab_a/r06';
xPOI['0_1_59_6']='/dokument/body/tab_a/r07';
xPOI['0_1_59_7']='/dokument/body/tab_a/r08';
xPOI['0_1_59_8']='/dokument/body/tab_a/r09';
xPOI['0_1_59_9']='/dokument/body/tab_a/r10';
xPOI['0_1_59_10']='/dokument/body/tab_a/r11';
xPOI['0_1_59_11']='/dokument/body/tab_a/r12';
xPOI['0_1_59_12']='/dokument/body/tab_a/r13';
xPOI['0_1_59_13']='/dokument/body/tab_a/r14';
xPOI['0_1_59_14']='/dokument/body/tab_a/r15';
xPOI['0_1_59_15']='/dokument/body/tab_a/r16';
xPOI['0_1_59_16']='/dokument/body/tab_a/r17';
xPOI['0_1_59_17']='/dokument/body/tab_a/r18';
xPOI['0_1_59_18']='/dokument/body/tab_a/r19';
xPOI['0_1_60_0']='/dokument/body/tab_b/r01';
xPOI['0_1_60_1']='/dokument/body/tab_b/r02';
xPOI['0_1_60_2']='/dokument/body/tab_b/r03';
xPOI['0_1_61_0']='/dokument/body/tab_c/r01';
xPOI['0_1_61_1']='/dokument/body/tab_c/r02';
xPOI['0_1_61_2']='/dokument/body/tab_c/r03';
xPOI['0_1_62_0']='/dokument/body/tab_d/r01';
xPOI['0_1_62_1']='/dokument/body/tab_d/r02';
xPOI['0_1_62_2']='/dokument/body/tab_d/r03';
xPOI['0_1_62_3']='/dokument/body/tab_d/r04';
xPOI['0_1_62_4']='/dokument/body/tab_d/r05';
xPOI['0_1_63_0']='/dokument/body/tab_e/r01';
xPOI['0_1_63_1']='/dokument/body/tab_e/r02';
xPOI['0_1_63_2']='/dokument/body/tab_e/r03';
xPOI['0_1_63_3']='/dokument/body/tab_e/r04';
xPOI['0_1_63_4']='/dokument/body/tab_e/r05';
xPOI['0_1_63_5']='/dokument/body/tab_e/r06';
xPOI['0_1_64_0_0_0']='/dokument/body/tab_f/cast1/riadok[' + baseIndex + ']/s01';
xPOI['0_1_64_0_0_1']='/dokument/body/tab_f/cast1/riadok[' + baseIndex + ']/s02';
xPOI['0_1_64_0_0_2']='/dokument/body/tab_f/cast1/riadok[' + baseIndex + ']/s03';
xPOI['0_1_64_0_0_3']='/dokument/body/tab_f/cast1/riadok[' + baseIndex + ']/s04';
xPOI['0_1_64_0_1_0']='/dokument/body/tab_f/cast1/riadok[' + (baseIndex + 1) + ']/s01';
xPOI['0_1_64_0_1_1']='/dokument/body/tab_f/cast1/riadok[' + (baseIndex + 1) + ']/s02';
xPOI['0_1_64_0_1_2']='/dokument/body/tab_f/cast1/riadok[' + (baseIndex + 1) + ']/s03';
xPOI['0_1_64_0_1_3']='/dokument/body/tab_f/cast1/riadok[' + (baseIndex + 1) + ']/s04';
xPOI['0_1_64_0_2_0']='/dokument/body/tab_f/cast1/riadok[' + (baseIndex + 2) + ']/s01';
xPOI['0_1_64_0_2_1']='/dokument/body/tab_f/cast1/riadok[' + (baseIndex + 2) + ']/s02';
xPOI['0_1_64_0_2_2']='/dokument/body/tab_f/cast1/riadok[' + (baseIndex + 2) + ']/s03';
xPOI['0_1_64_0_2_3']='/dokument/body/tab_f/cast1/riadok[' + (baseIndex + 2) + ']/s04';
xPOI['0_1_64_0_3_0']='/dokument/body/tab_f/cast1/riadok[' + (baseIndex + 3) + ']/s01';
xPOI['0_1_64_0_3_1']='/dokument/body/tab_f/cast1/riadok[' + (baseIndex + 3) + ']/s02';
xPOI['0_1_64_0_3_2']='/dokument/body/tab_f/cast1/riadok[' + (baseIndex + 3) + ']/s03';
xPOI['0_1_64_0_3_3']='/dokument/body/tab_f/cast1/riadok[' + (baseIndex + 3) + ']/s04';
xPOI['0_1_64_0_4_0']='/dokument/body/tab_f/cast1/riadok[' + (baseIndex + 4) + ']/s01';
xPOI['0_1_64_0_4_1']='/dokument/body/tab_f/cast1/riadok[' + (baseIndex + 4) + ']/s02';
xPOI['0_1_64_0_4_2']='/dokument/body/tab_f/cast1/riadok[' + (baseIndex + 4) + ']/s03';
xPOI['0_1_64_0_4_3']='/dokument/body/tab_f/cast1/riadok[' + (baseIndex + 4) + ']/s04';
xPOI['0_1_64_0_5_0']='/dokument/body/tab_f/cast1/riadok[' + (baseIndex + 5) + ']/s01';
xPOI['0_1_64_0_5_1']='/dokument/body/tab_f/cast1/riadok[' + (baseIndex + 5) + ']/s02';
xPOI['0_1_64_0_5_2']='/dokument/body/tab_f/cast1/riadok[' + (baseIndex + 5) + ']/s03';
xPOI['0_1_64_0_5_3']='/dokument/body/tab_f/cast1/riadok[' + (baseIndex + 5) + ']/s04';
xPOI['0_1_64_0_6_0']='/dokument/body/tab_f/cast1/riadok[' + (baseIndex + 6) + ']/s01';
xPOI['0_1_64_0_6_1']='/dokument/body/tab_f/cast1/riadok[' + (baseIndex + 6) + ']/s02';
xPOI['0_1_64_0_6_2']='/dokument/body/tab_f/cast1/riadok[' + (baseIndex + 6) + ']/s03';
xPOI['0_1_64_0_6_3']='/dokument/body/tab_f/cast1/riadok[' + (baseIndex + 6) + ']/s04';
xPOI['0_1_64_0_7_0']='/dokument/body/tab_f/cast1/riadok[' + (baseIndex + 7) + ']/s01';
xPOI['0_1_64_0_7_1']='/dokument/body/tab_f/cast1/riadok[' + (baseIndex + 7) + ']/s02';
xPOI['0_1_64_0_7_2']='/dokument/body/tab_f/cast1/riadok[' + (baseIndex + 7) + ']/s03';
xPOI['0_1_64_0_7_3']='/dokument/body/tab_f/cast1/riadok[' + (baseIndex + 7) + ']/s04';
	// nevyskytuje sa v Matkovom poli inputov a ja ho tiez nepotrebujem: xPOI['0_1_64_1_0_0']='/dokument/body/tab_f/cast2/riadok[' + baseIndex + ']/s01';
xPOI['0_1_64_1_0_1']='/dokument/body/tab_f/cast2/riadok[' + baseIndex + ']/s02';
xPOI['0_1_64_1_0_2']='/dokument/body/tab_f/cast2/riadok[' + baseIndex + ']/s03';
xPOI['0_1_64_1_0_3']='/dokument/body/tab_f/cast2/riadok[' + baseIndex + ']/s04';
xPOI['0_1_64_1_1_0']='/dokument/body/tab_f/cast2/riadok[' + (baseIndex + 1) + ']/s01';
xPOI['0_1_64_1_1_1']='/dokument/body/tab_f/cast2/riadok[' + (baseIndex + 1) + ']/s02';
xPOI['0_1_64_1_1_2']='/dokument/body/tab_f/cast2/riadok[' + (baseIndex + 1) + ']/s03';
xPOI['0_1_64_1_1_3']='/dokument/body/tab_f/cast2/riadok[' + (baseIndex + 1) + ']/s04';
xPOI['0_1_64_1_2_0']='/dokument/body/tab_f/cast2/riadok[' + (baseIndex + 2) + ']/s01';
xPOI['0_1_64_1_2_1']='/dokument/body/tab_f/cast2/riadok[' + (baseIndex + 2) + ']/s02';
xPOI['0_1_64_1_2_2']='/dokument/body/tab_f/cast2/riadok[' + (baseIndex + 2) + ']/s03';
xPOI['0_1_64_1_2_3']='/dokument/body/tab_f/cast2/riadok[' + (baseIndex + 2) + ']/s04';
xPOI['0_1_64_1_3_0']='/dokument/body/tab_f/cast2/riadok[' + (baseIndex + 3) + ']/s01';
xPOI['0_1_64_1_3_1']='/dokument/body/tab_f/cast2/riadok[' + (baseIndex + 3) + ']/s02';
xPOI['0_1_64_1_3_2']='/dokument/body/tab_f/cast2/riadok[' + (baseIndex + 3) + ']/s03';
xPOI['0_1_64_1_3_3']='/dokument/body/tab_f/cast2/riadok[' + (baseIndex + 3) + ']/s04';
xPOI['0_1_64_1_4_0']='/dokument/body/tab_f/cast2/riadok[' + (baseIndex + 4) + ']/s01';
xPOI['0_1_64_1_4_1']='/dokument/body/tab_f/cast2/riadok[' + (baseIndex + 4) + ']/s02';
xPOI['0_1_64_1_4_2']='/dokument/body/tab_f/cast2/riadok[' + (baseIndex + 4) + ']/s03';
xPOI['0_1_64_1_4_3']='/dokument/body/tab_f/cast2/riadok[' + (baseIndex + 4) + ']/s04';
xPOI['0_1_64_1_5_0']='/dokument/body/tab_f/cast2/riadok[' + (baseIndex + 5) + ']/s01';
xPOI['0_1_64_1_5_1']='/dokument/body/tab_f/cast2/riadok[' + (baseIndex + 5) + ']/s02';
xPOI['0_1_64_1_5_2']='/dokument/body/tab_f/cast2/riadok[' + (baseIndex + 5) + ']/s03';
xPOI['0_1_64_1_5_3']='/dokument/body/tab_f/cast2/riadok[' + (baseIndex + 5) + ']/s04';
xPOI['0_1_64_1_6_0']='/dokument/body/tab_f/cast2/riadok[' + (baseIndex + 6) + ']/s01';
xPOI['0_1_64_1_6_1']='/dokument/body/tab_f/cast2/riadok[' + (baseIndex + 6) + ']/s02';
xPOI['0_1_64_1_6_2']='/dokument/body/tab_f/cast2/riadok[' + (baseIndex + 6) + ']/s03';
xPOI['0_1_64_1_6_3']='/dokument/body/tab_f/cast2/riadok[' + (baseIndex + 6) + ']/s04';
xPOI['0_1_64_1_7_0']='/dokument/body/tab_f/cast2/riadok[' + (baseIndex + 7) + ']/s01';
xPOI['0_1_64_1_7_1']='/dokument/body/tab_f/cast2/riadok[' + (baseIndex + 7) + ']/s02';
xPOI['0_1_64_1_7_2']='/dokument/body/tab_f/cast2/riadok[' + (baseIndex + 7) + ']/s03';
xPOI['0_1_64_1_7_3']='/dokument/body/tab_f/cast2/riadok[' + (baseIndex + 7) + ']/s04';
	// nevyskytuje sa v Matkovom poli inputov a ja ho tiez nepotrebujem: xPOI['0_1_64_2_0_0']='/dokument/body/tab_f/cast3/riadok[' + baseIndex + ']/s01';
xPOI['0_1_64_2_0_1']='/dokument/body/tab_f/cast3/riadok[' + baseIndex + ']/s02';
xPOI['0_1_64_2_0_2']='/dokument/body/tab_f/cast3/riadok[' + baseIndex + ']/s03';
xPOI['0_1_64_2_0_3']='/dokument/body/tab_f/cast3/riadok[' + baseIndex + ']/s04';
xPOI['0_1_64_2_1_0']='/dokument/body/tab_f/cast3/riadok[' + (baseIndex + 1) + ']/s01';
xPOI['0_1_64_2_1_1']='/dokument/body/tab_f/cast3/riadok[' + (baseIndex + 1) + ']/s02';
xPOI['0_1_64_2_1_2']='/dokument/body/tab_f/cast3/riadok[' + (baseIndex + 1) + ']/s03';
xPOI['0_1_64_2_1_3']='/dokument/body/tab_f/cast3/riadok[' + (baseIndex + 1) + ']/s04';
xPOI['0_1_64_2_2_0']='/dokument/body/tab_f/cast3/riadok[' + (baseIndex + 2) + ']/s01';
xPOI['0_1_64_2_2_1']='/dokument/body/tab_f/cast3/riadok[' + (baseIndex + 2) + ']/s02';
xPOI['0_1_64_2_2_2']='/dokument/body/tab_f/cast3/riadok[' + (baseIndex + 2) + ']/s03';
xPOI['0_1_64_2_2_3']='/dokument/body/tab_f/cast3/riadok[' + (baseIndex + 2) + ']/s04';
xPOI['0_1_64_2_3_0']='/dokument/body/tab_f/cast3/riadok[' + (baseIndex + 3) + ']/s01';
xPOI['0_1_64_2_3_1']='/dokument/body/tab_f/cast3/riadok[' + (baseIndex + 3) + ']/s02';
xPOI['0_1_64_2_3_2']='/dokument/body/tab_f/cast3/riadok[' + (baseIndex + 3) + ']/s03';
xPOI['0_1_64_2_3_3']='/dokument/body/tab_f/cast3/riadok[' + (baseIndex + 3) + ']/s04';
xPOI['0_1_64_2_4_0']='/dokument/body/tab_f/cast3/riadok[' + (baseIndex + 4) + ']/s01';
xPOI['0_1_64_2_4_1']='/dokument/body/tab_f/cast3/riadok[' + (baseIndex + 4) + ']/s02';
xPOI['0_1_64_2_4_2']='/dokument/body/tab_f/cast3/riadok[' + (baseIndex + 4) + ']/s03';
xPOI['0_1_64_2_4_3']='/dokument/body/tab_f/cast3/riadok[' + (baseIndex + 4) + ']/s04';
xPOI['0_1_64_2_5_0']='/dokument/body/tab_f/cast3/riadok[' + (baseIndex + 5) + ']/s01';
xPOI['0_1_64_2_5_1']='/dokument/body/tab_f/cast3/riadok[' + (baseIndex + 5) + ']/s02';
xPOI['0_1_64_2_5_2']='/dokument/body/tab_f/cast3/riadok[' + (baseIndex + 5) + ']/s03';
xPOI['0_1_64_2_5_3']='/dokument/body/tab_f/cast3/riadok[' + (baseIndex + 5) + ']/s04';
xPOI['0_1_64_2_6_0']='/dokument/body/tab_f/cast3/riadok[' + (baseIndex + 6) + ']/s01';
xPOI['0_1_64_2_6_1']='/dokument/body/tab_f/cast3/riadok[' + (baseIndex + 6) + ']/s02';
xPOI['0_1_64_2_6_2']='/dokument/body/tab_f/cast3/riadok[' + (baseIndex + 6) + ']/s03';
xPOI['0_1_64_2_6_3']='/dokument/body/tab_f/cast3/riadok[' + (baseIndex + 6) + ']/s04';
xPOI['0_1_64_2_7_0']='/dokument/body/tab_f/cast3/riadok[' + (baseIndex + 7) + ']/s01';
xPOI['0_1_64_2_7_1']='/dokument/body/tab_f/cast3/riadok[' + (baseIndex + 7) + ']/s02';
xPOI['0_1_64_2_7_2']='/dokument/body/tab_f/cast3/riadok[' + (baseIndex + 7) + ']/s03';
xPOI['0_1_64_2_7_3']='/dokument/body/tab_f/cast3/riadok[' + (baseIndex + 7) + ']/s04';
xPOI['0_1_65_0']='/dokument/body/tab_g/r01';
xPOI['0_1_65_1']='/dokument/body/tab_g/r02';
xPOI['0_1_66_0']='/dokument/body/tab_h/r01';
xPOI['0_1_66_1']='/dokument/body/tab_h/r02';
xPOI['0_1_66_2']='/dokument/body/tab_h/r03';
xPOI['0_1_66_3']='/dokument/body/tab_h/r04';