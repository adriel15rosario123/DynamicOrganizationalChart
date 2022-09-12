import React, {useEffect, useState} from 'react';
import {Tree, TreeNode} from 'react-organizational-chart';
import styled from 'styled-components';
import {orgData} from './OrgChartMoq';
import OrgDto from './OrgDto';

const DashedLarimar = styled.div`
	display: inline-flex;
	position: relative;
	align-items: center;
	justify-content: center;
	width: 130px;
	height: 104px;

	border-radius: 50%;
	border: 0.5vw dashed #00c1d5;
	flex-wrap: wrap;
	align-content: center;
`;
const SolidLarimar = styled.div`
	display: inline-flex;
	position: relative;
	align-items: center;
	justify-content: center;
	width: 130px;
	height: 104px;
	border-radius: 50%;
	border: 0.5vw solid #00c1d5;
	flex-wrap: wrap;
	align-content: center;
`;
const SolidBlue = styled.div`
	display: inline-flex;
	position: relative;
	align-items: center;
	justify-content: center;
	width: 130px;
	height: 104px;
	border-radius: 50%;
	border: 0.5vw solid #003b7a;
	flex-wrap: wrap;
	align-content: center;
`;
const SolidGray = styled.div`
	display: inline-flex;
	position: relative;
	align-items: center;
	justify-content: center;
	width: 130px;
	height: 104px;
	border-radius: 50%;
	border: 0.5vw solid #969696;
	flex-wrap: wrap;
	align-content: center;
`;
const GraySpan = styled.span`
	text-align: center;
	color: #969696;
	flex: 0 0 100%;
	font: normal normal 500 10px/13px 'RobotoMedium500';
`;
const BlueSpan = styled.span`
	text-align: center;
	color: #012169;
	font: normal normal bold 13px/13px 'RobotoMedium500';
	flex: 0 0 100%;
`;
const MarSpan = styled.span`
	text-align: center;
	color: #00709e;
	font: normal normal bold 13px/13px 'RobotoMedium500';
	flex: 0 0 100%;
`;

const OrgChart = () => {
	const [rootNode, setRootNode] = useState<OrgDto>(new OrgDto());
	const [nodes, setNodes] = useState<OrgDto[]>([]);

	useEffect(() => {
		const fetchedRootNode = orgData.filter((n) => n.fatherId === null);
		setRootNode(fetchedRootNode[0]);
		setNodes(orgData);
	}, []);

	const renderNodes = (fatherId: number) => {
		const childNodes = nodes.filter((cn) => cn.fatherId === fatherId);

		if (childNodes.length > 0) {
			return childNodes.map((cn) => (
				<TreeNode key={cn.id} label={getCustomCircle(cn.circleStyled, cn.rol)}>
					{renderNodes(cn.id)}
				</TreeNode>
			));
		}
	};

	const getCustomCircle = (circleStyled: string, rol: string) => {
		switch (circleStyled) {
			case 'DashedLarimar':
				return <DashedLarimar>{rol}</DashedLarimar>;
			case 'SolidLarimar':
				return <SolidLarimar>{rol}</SolidLarimar>;
			case 'SolidBlue':
				return <SolidBlue>{rol}</SolidBlue>;
			case 'SolidGray':
				return <SolidGray>{rol}</SolidGray>;
		}
	};

	return (
		<div>
			<Tree
				lineWidth={'5px'}
				lineColor={'#00c1d5'}
				lineBorderRadius={'0px'}
				label={getCustomCircle(rootNode.circleStyled, rootNode.rol)}
				nodePadding={'5px'}
			>
				{renderNodes(rootNode.id)}
			</Tree>
		</div>
	);
};

export default OrgChart;
