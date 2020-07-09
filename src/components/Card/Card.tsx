import React, { ReactElement } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles } from '@material-ui/core';

import styles from './styles';

interface CardInjectionProps extends WithStyles<typeof styles> {}

interface CardArtProps {
	caption: string;
	imageUrl: string;
}

type Props = CardInjectionProps & CardArtProps;

const ArtCard = (props: Props): ReactElement => {
	const { classes, caption, imageUrl } = props as Props;

	return (
		<Card className={classes.root}>
			<CardContent>
				<img src={imageUrl} alt={'from museum API'} />
				<Typography variant="body2" component="p">
					{caption}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default withStyles(styles)(ArtCard);
