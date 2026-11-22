import React from 'react';
import {CoverContent, CoverLayout} from './components/CoverLayout';

const CONTENT: CoverContent = {
	subject: 'biology',
	badge: '高考生物',
	book: '人教版·选择性必修1·第3章',
	title: [[['激素与']], [['内分泌系统', true]]],
	sub: '9大考点·每点讲透怎么考',
	points: ['促胰液素的发现', '胰岛素的发现', '加法与减法原理', '研究方法与对照设计', '内分泌系统的组成', '主要激素的功能', '激素的化学本质', '分泌异常与疾病', '激素调节的特点'],
	photo: 'rooster.jpg',
	photoPos: '62% center',
	photoTag: '摘除睾丸 → 雄性特征消失',
	credit: 'Photo: Julian Lupyan, CC0',
};

export const Cover: React.FC<{w: number; h: number}> = ({w, h}) => <CoverLayout c={CONTENT} w={w} h={h} />;
