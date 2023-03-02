function createWrapper() {
	const wrapper = document.createElement('div');
	wrapper.classList.add('my-select');
	return wrapper;
}

function createInput(valueSelect = '') {
	const input = document.createElement('input');
	input.classList.add('my-select__input');
	input.type = 'text';
	input.value = valueSelect;
	input.readOnly = true;
	return input;
}

function createList() {
	const list = document.createElement('ul');
	list.classList.add('my-select__list');
	return list;
}

function createListItem(arrayItems = [ { value: '1', text: '11' } ], valueSelect = '') {
	let listItems = [];
	arrayItems.forEach(singleItem => {
		const item = document.createElement('li');
		item.classList.add('my-select__item');
		if (singleItem.value === valueSelect) {
			item.classList.add('selected');
		}
		item.innerHTML = singleItem.text || singleItem.value;
		item.setAttribute('data-value', singleItem.value);
		listItems.push(item);
	});
	return listItems;
}

function initEventHandler (e, id) {
	const select = e.target.closest(id);
	if(select && select.querySelector('.my-select')) {
		select.querySelector('.my-select').classList.add('open');
		document.querySelector('.overflow').style.visibility = 'visible';
		const isItemClick = e.target.closest('.my-select__item');
		if (isItemClick) {
			const value = isItemClick.dataset.value;
			const text = isItemClick.innerHTML;
			select.querySelector('select').value = value;
			select.querySelector('.my-select__input').value = text;
			select.querySelectorAll('.my-select__item').forEach(item => {
				if(item.dataset.value === value) {
					item.classList.add('selected');
				} else {
					item.classList.remove('selected');
				}
			})
			document.querySelector('.overflow').style.visibility = 'hidden';
			select.querySelector('.my-select').classList.remove('open');
		}
	} else {
		document.querySelector('.overflow').style.visibility = 'hidden';
		document.querySelectorAll('.my-select').forEach(sel => sel.classList.remove('open'))
	}
}

function renderCustomSelect(wrapperId) {
	if(!document.querySelector('.overflow')) {
		const o = document.createElement('div');
		o.classList.add('overflow');
		document.body.appendChild(o);
	}
	const wrapSelect = document.getElementById(wrapperId);
	if (!wrapSelect) {
		return false;
	}
	const selectByDom = wrapSelect.querySelector('select');
	if (!selectByDom) {
		return false;
	}

	function getTextByValue(value) {
		let v = '';
		selectByDom.querySelectorAll('option').forEach(op => {
			if(op.value === value) {
				v = op.innerHTML;
			}
		})
		return v;
	}

	function init() {
		selectByDom.hidden = true;
		const initValue = selectByDom.value;
		const select = createWrapper();
		const inputSelect = createInput(getTextByValue(initValue));
		const list = createList();
		const listItemData = selectByDom.querySelectorAll('option');
		if (!listItemData.length) {
			return false;
		}
		const items = createListItem(Array.from(listItemData), initValue);
		items.forEach(item => {
			list.appendChild(item)
		})
		select.appendChild(inputSelect);
		select.appendChild(list);
		wrapSelect.appendChild(select);
		wrapSelect.appendChild(select);
		document.addEventListener('click', (e) => initEventHandler(e, `#${wrapperId}`))
	}
	function destroy() {
		wrapSelect.querySelector('.my-select').remove();
		selectByDom.hidden = false;
		document.removeEventListener('click', (e) => initEventHandler(e, `#${wrapperId}`));
	}
	return {
		init,
		destroy
	}
}

const sel = renderCustomSelect('custom-select');

sel.init();
