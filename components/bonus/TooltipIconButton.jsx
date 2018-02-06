import React from 'react';
import PropTypes from 'prop-types';
import { Components, registerComponent, Utils } from 'meteor/vulcan:core';
import { intlShape } from 'meteor/vulcan:i18n';
import withStyles from 'material-ui/styles/withStyles';
import withTheme from 'material-ui/styles/withTheme';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import classNames from 'classnames';


const styles = theme => ({
  root: {},
  tooltip: {
    margin: '4px !important',
  },
  buttonWrap: {
    display: 'inline-block',
  },
  button: {},
});


const TooltipIconButton = (props, { intl }) => {
  
  const {
    title,
    titleId,
    icon,
    className,
    classes,
    theme,
    buttonRef,
    fab,
    ...properties
  } = props;
  
  const titleText = props.title || intl.formatMessage({ id: titleId });
  const slug = Utils.slugify(titleId);
  
  return (
    <Tooltip className={className}
             classes={{ tooltip: classes.tooltip }}
             id={`tooltip-${slug}`}
             title={titleText}
             placement="bottom"
             enterDelay={theme.utils.tooltipEnterDelay}
    >
      <div className={classes.buttonWrap}>
        {
          fab
            
            ?
            
            <Button className={classNames(classes.button, slug)}
                    fab
                    aria-label={title}
                    ref={buttonRef}
                    {...properties}
            >
              {icon}
            </Button>
            
            :
            
            <IconButton className={classNames(classes.button, slug)}
                        aria-label={title}
                        ref={buttonRef}
                        {...properties}
            >
              {icon}
            </IconButton>
        }
      </div>
    </Tooltip>
  );
  
};


TooltipIconButton.propTypes = {
  title: PropTypes.node,
  titleId: PropTypes.string,
  icon: PropTypes.node.isRequired,
  className: PropTypes.string,
  classes: PropTypes.object,
  buttonRef: PropTypes.func,
  fab: PropTypes.bool,
  theme: PropTypes.object,
};


TooltipIconButton.contextTypes = {
  intl: intlShape.isRequired,
};


TooltipIconButton.displayName = 'TooltipIconButton';


registerComponent('TooltipIconButton', TooltipIconButton, [withStyles, styles], [withTheme]);
