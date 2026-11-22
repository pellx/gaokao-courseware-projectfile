import React from 'react';
import {AutoScene} from '../components/auto';

export const Setup: React.FC = () => <AutoScene k="setup" d={{"tag": "考点二", "title": "装置与除杂顺序", "blocks": [{"t": "chain", "steps": [{"at": "se1", "text": "发生\nMnO2 + 浓 HCl"}, {"at": "se2", "text": "饱和食盐水\n除 {HCl}", "c": "red"}, {"at": "se2", "text": "浓硫酸\n除 {H2O|orange}", "c": "orange"}, {"at": "se3", "text": "向上排空气\n收集"}, {"at": "se3", "text": "NaOH 溶液\n{尾气吸收}", "c": "green"}], "arrows": [], "center": true, "size": 30, "gap": 10}, {"t": "big", "at": "se3", "text": "Cl2 + 2OH^- = Cl^- + ClO^- + H2O", "size": 40}], "callout": {"label": "易错", "at": "se4", "text": "先{饱和食盐水}后{浓硫酸|orange}；尾气不用澄清石灰水"}, "beat": {"k": "mask", "at": "se3b", "text": "氯气有毒\n最后一定{尾气吸收|red}"}}} />;
